import { doc, getDoc, setDoc } from "firebase/firestore";
import { Category, Plant, Subcategory } from "../types";
import { db } from "../service/firebase-config.js";

export const addCategory = async (category: Category) => {
  try {
    const docRef = doc(db, "data", "categories");

    await setDoc(
      docRef,
      {
        [category.id]: category,
      },
      { merge: true } // ✅ This preserves existing categories
    );

    console.log("Category added to map in 'categories' document!");
  } catch (error) {
    console.error("Error adding category to map:", error);
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const docRef = doc(db, "data", "categories");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const categories: Category[] = Object.values(data) as Category[];
      return categories;
    } else {
      console.log("No such document!");
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getSubCategories = async (
  categoryId: string
): Promise<Subcategory[]> => {
  try {
    const docRef = doc(db, "data", "categories");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const category = data[categoryId] as Subcategory;
      console.log("Category : ", category);

      return [];
    } else {
      console.log("No such subCategory!");
      return [];
    }
  } catch (error) {
    console.log("Error in fetching:", error);
    return [];
  }
};

export const addSubCategories = async (
  categoryId: string,
  subCategory: Subcategory
): Promise<void> => {
  try {
    const docRef = doc(db, "data", "categories");
    const docSnap = await getDoc(docRef);

    console.log(categoryId);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log(data);

      const category = data["bonsais"] as Category;
      // const subCategories = category.subcategories as Subcategory[];
      // const subCategory = subCategories["bog"] as Category;
      // console.log("Category : ", category);
      // console.log("SubCategories : ", subCategories);
      // console.log("SubCategory : ", subCategory);

      if (!category) {
        console.warn(`Category with id '${categoryId}' not found.`);
        return;
      }

      // Append subcategory
      const updatedSubcategories = [...category.subcategories, subCategory];

      // Update only this category field in the map
      await setDoc(
        docRef,
        {
          [categoryId]: {
            ...category,
            subcategories: updatedSubcategories,
          },
        },
        { merge: true }
      );

      console.log("Subcategory added successfully!");
    } else {
      console.warn("Categories document does not exist.");
    }
  } catch (error) {
    console.error("Error adding subcategory:", error);
  }
};

export const addPlants = async (
  categoryId: string,
  subCategoryId: string,
  plant: Plant
) => {
  try {
    const docRef = doc(db, "data", "categories");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const category = data[categoryId] as Category;
      const subCategories = category.subcategories as Subcategory[];
      const subCategory = subCategories[subCategoryId] as Category;
      console.log("Category : ", category);
      console.log("SubCategories : ", subCategories);
      console.log("SubCategory : ", subCategory);

      return [];
    } else {
      console.log("No such subCategory!");
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};
