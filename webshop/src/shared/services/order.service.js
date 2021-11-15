import {db} from "@/firebase";

export function getOrders() {
    return db.collection('orders').get()
}

export function saveOrder(order) {
    if(order?.id != null){
        return db.collection('orders').doc(order.id).set(order)
    }else {
        order.id = db.collection('orders').doc().id
        return db.collection('orders').doc(order.id).set(order)
    }
}

export function getOrderById(id) {
    return db.collection('orders').doc(id).get()
}
