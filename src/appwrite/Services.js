import Conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";


export class Service{
    client = new Client();
database;
bucket;

constructor(){
    this.client
    .setEndpoint(Conf.appwriteUrl)
    .setProject(Conf.appwriteProjectID);
    this.database =new Databases(this.client)
    this.bucket =new Storage(this.client)
}
async createPost({title,slug,content,featuredimage,status,userid}){
    try {
            return await this.database.createDocument(
                Conf.appwriteDataBaseID,
                Conf.appwriteCollectionID,
                // document id as slug
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            )
    } catch (error) {
        console.log("create psot error" , error)
    }
}

async updatePost(slug,{title,content,featuredimage,status}){
    try {
        return await this.database.updateDocument(
            Conf.appwriteDataBaseID,
            Conf.appwriteCollectionID,
            slug,
           { title,
            content,
            status,
            featuredimage}
            )
    } catch (error) {
        
    }
}

async deletPost(slug){
    try {
        await this.database.deleteDocument(
            Conf.appwriteDataBaseID,
            Conf.appwriteCollectionID,
            slug
        )
    return true;
    } catch (error) {
        console.log("delet eror", error)
        return false;
    }
}

async getPost(slug){
    try {
            return await this.database.getDocument(
                Conf.appwriteDataBaseID,
                Conf.appwriteCollectionID,
                slug
            )
    } catch (error) {
        console.log("get post", error)
    }
}

async getPosts(queries= [Query.equal("status","active")]){
    try {
        return await this.database.listDocuments(
            Conf.appwriteDataBaseID,
            Conf.appwriteCollectionID,
            queries

        )
    } catch (error) {
        console.log("getposts list with actievs" ,active);
        return false
    }
}

// File service

async fileUpload(file){
    try {
            return await this.bucket.createFile(
                Conf.appwriteBucketID,
                ID,
                file

            )
    } catch (error) {
        console.log("file upload error", error)
    }
}

async deletFile(fileId){
    try {
        await this.bucket.deleteFile(
            Conf.appwriteBucketID,
            fileId
        )
        return true
    } catch (error) {
        console.log("deleted file")
        return false
    }
}


    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            Conf.appwriteBucketID,
            fileId
        )
    }


}

const services = new Service()
export default services;