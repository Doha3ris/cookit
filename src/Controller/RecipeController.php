<?php

namespace App\Controller;


use App\Entity\Recipe;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/recipe', name: 'recipe_')]
class RecipeController extends AbstractController
{
    #[Route('/get_all', name: 'get_all')]
    public function getAllRecipe(RecipeRepository $recipeRepository, SerializerInterface $serializer)
    {
        $data = $serializer->serialize($recipeRepository->findAll(), 'json');
        return new Response($data);
    }

    #[Route('/create', name: 'create')]
    public function createRecipe(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $recipe = new Recipe();
        $recipe->setTitle("Lasagnes à la bolognaise");
        $recipe->setImage("https://www.mapatisserie.net/wp-content/uploads/2018/11/i19403-lasgnes-bolognaise-facile.jpg");
        $recipe->setIngredients([
            "1 kg de bolognaise",
            "800 g de viande hachée",
            "1 Oignon",
            "1 Échalote",
            "80 g de beurre",
            "10 feuilles de lasagnes",
            "1 l de béchamel"
        ]);
        $recipe->setPreparationTime("1 heure");
        $recipe->setCookingTime("45 minutes");
        $recipe->setDifficulty("Hard");
        $recipe->setPreparation([
            "Couper les carottes en rondelles",
            "Faîtes bouillir de l'eau avec un cube or",
            "Effectuer une pré cuisson des carottes à la vapeur",
            "Faîtes revenir un oignon et une échalote dans du beurre puis ajouter vos carottes",
            "Déglacé les carottes avec votre jus de cube or",
            "Faîtes réduire la préparation",
            "C'est prêt !"
        ]);

        $entityManager->persist($recipe);
        $entityManager->flush();

        return new Response('Saved new product with id ' . $recipe->getId());
    }

    #[Route('/delete', name: 'delete')]
    public function deleteAllRecipes(EntityManagerInterface $entityManager, RecipeRepository $recipeRepository): Response
    {
        $recipeRepository->dropAllRecipes();
        $entityManager->flush();

        return new Response('All records have been successfully deleted.');
    }

}