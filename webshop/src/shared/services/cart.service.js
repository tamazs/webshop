import {db} from "@/firebase";

export function getCartByCustomerId(userId) {
    return db.collection('carts').where('uid', '==', userId).get()
}

export function saveCart(cart) {
    if(cart.id){
        return db.collection('carts').doc(cart.id).update(cart)
    }else{
        cart.id = db.collection('carts').doc().id
        return db.collection('carts').doc(cart.id).set(cart)
    }
}
export function removeCart(cartId) {
    return db.collection('carts').doc(cartId).delete()
}

export function removeItemFromCart(shoesItemId){
   return db.collection('carts').doc(shoesItemId).delete()
}

