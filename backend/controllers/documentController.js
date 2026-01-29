import Documents from '../models/Document';
import Flashcard from '../models/Flashcard';
import Quiz from '../models/Quiz';
import { extractTextFromPDF } from '../utils/pdfParser';
import { chunkText } from '../utils/textChunker';
import fs from 'fs/promises';
import mongoose from 'mongoose';

//@desc    Upload a document
//@route   POST /api/documents/upload
//@access  Private
export const uploadDocument = async (req, res, next) => {
    try {

    } catch (error) {
        //Clean up file on error
        if (req.file) {
            await fs.unlink(req.file.path).catch(() => { });
        }
        next(error);
    };
}

//@desc   Get all user document
//@route  GET /api/documents
//access  Private
export default getDocuments = async (req, res, next) => {

};

//@desc   Get single document with chunks
//route   GET /api/documents/:id
//access  Private
export const getDocument = async (req, res, next) => {

};

//@desc   Delete a document
//route   DELETE /api/documents/:id
//access  Private
export const deleteDocument = async (req, res, next) => {

}

//@desc   Update document title
//route   PUT /api/documents/:id
//access  Private
export const updateDocument = async (req, res, next) => {

}