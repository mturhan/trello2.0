import { ID, storage } from "@/appwrite";
import React from "react";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64759816bd2ae52b94cb",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
