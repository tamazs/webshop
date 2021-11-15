import {auth} from "@/firebase";

export function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

export function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

export function logout() {
    return auth.signOut()
}

export function updateUser(data) {
    return auth.updateCurrentUser(data)
}
