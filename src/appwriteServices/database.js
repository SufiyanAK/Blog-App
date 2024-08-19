import { Client, Databases, ID, Query, Storage } from 'appwrite';
import { env } from '../envImports/envVariables';
import { enqueueSnackbar } from 'notistack';

export class DatabaseServices {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(env.appwriteUrl)
            .setProject(env.projectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createDocument({ title, slug, content, featuredImage, status, userId }) {
        try {
            const newBlog = await this.databases.createDocument(
                env.databaseId,
                env.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            if (!newBlog) {
                enqueueSnackbar('Blog creation failed.', { variant: 'error' });
                return;
            }

            enqueueSnackbar('Blog successfully created.', { variant: 'success' });
            return newBlog;
        } catch (error) {
            enqueueSnackbar('Document creation failed.', { variant: 'error' });
            console.error('Create document error:', error);
        }
    }

    async updateDocument(slug, { title, content, featuredImage, status }) {
        try {
            const updatedBlog = await this.databases.updateDocument(
                env.databaseId,
                env.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );

            if (!updatedBlog) {
                enqueueSnackbar('Blog update failed.', { variant: 'error' });
                return;
            }

            enqueueSnackbar('Blog successfully updated.', { variant: 'success' });
            return updatedBlog;
        } catch (error) {
            enqueueSnackbar('Document update failed.', { variant: 'error' });
            console.error('Update document error:', error);
        }
    }

    async deleteDocument(slug) {
        try {
            await this.databases.deleteDocument(
                env.databaseId,
                env.collectionId,
                slug
            );

            enqueueSnackbar('Blog successfully deleted.', { variant: 'success' });
            return true;
        } catch (error) {
            enqueueSnackbar('Document deletion failed.', { variant: 'error' });
            console.error('Delete document error:', error);
            return false;
        }
    }

    async getDocument(slug) {
        try {
            const getBlog = await this.databases.getDocument(
                env.databaseId,
                env.collectionId,
                slug
            );

            if (!getBlog) {
                enqueueSnackbar('Document retrieval failed.', { variant: 'error' });
                return;
            }

            return getBlog;
        } catch (error) {
            enqueueSnackbar('Document retrieval failed.', { variant: 'error' });
            console.error('Get document error:', error);
        }
    }

    async getAllDocuments(queries = [Query.equal('status', 'active')]) {
        try {
            const activeBlogs = await this.databases.listDocuments(
                env.databaseId,
                env.collectionId,
                queries
            );

            return activeBlogs;
        } catch (error) {
            enqueueSnackbar('Document list retrieval failed.', { variant: 'error' });
            console.error('List documents error:', error);
        }
    }

    async uploadImage(file) {
        try {
            const uploadFile = await this.bucket.createFile(
                env.bucketId,
                ID.unique(),
                file
            );

            if (!uploadFile) {
                enqueueSnackbar('File upload failed.', { variant: 'error' });
                return;
            }

            enqueueSnackbar('File uploaded successfully.', { variant: 'success' });
            return uploadFile;
        } catch (error) {
            enqueueSnackbar('File upload failed.', { variant: 'error' });
            console.error('File upload error:', error);
        }
    }

    async deleteImage(fileID) {
        try {
            await this.bucket.deleteFile(
                env.bucketId,
                fileID
            );

            enqueueSnackbar('File successfully deleted.', { variant: 'success' });
            return true;
        } catch (error) {
            enqueueSnackbar('File deletion failed.', { variant: 'error' });
            console.error('Delete file error:', error);
            return false;
        }
    }

    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            env.bucketId,
            fileID
        );
    }
}

const databaseServices = new DatabaseServices();

export default databaseServices;
