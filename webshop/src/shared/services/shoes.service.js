import {db, storage} from "@/firebase";

export function getShoesList() {
    return db.collection('shoes').get()
}

export function saveNewShoesItem(createdShoesItem) {
    createdShoesItem.id = db.collection('shoes').doc().id
    return db.collection('shoes').doc(createdShoesItem.id).set(createdShoesItem)
}

export function uploadNewPicture(file) {

    const rnd = (Math.random() + 1).toString(36).substring(4); // generate random string for better file naming
    const storageRef = storage.child('shoesItem/' + rnd + file.name);
    return storageRef.put(file)
}

export function getImageUrl(snapshot) {
    return snapshot.ref.getDownloadURL()
}

export function getShoesById(id) {
    return db.collection('shoes').doc(id).get()
}