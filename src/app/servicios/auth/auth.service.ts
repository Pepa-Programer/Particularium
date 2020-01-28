<<<<<<< HEAD:src/app/servers/auth/auth.service.ts
import { User } from '../../interfaces/UserInt';
=======
import { UserInt } from '../../interfaces/UserInt';
>>>>>>> 21ee226ecf1a3f71d6fecabaa58daebf1b91a342:src/app/servicios/auth/auth.service.ts
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	private user: UserInt = {};

	constructor(private afAuth: AngularFireAuth) {}

	register() {
		if (this.user.password !== this.user.cpassword) {
			console.error('Password dont match');
		}
		console.log(this.user.email)
		return this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
	}

	login() {
		return this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
	}

	logOut() {
		return this.afAuth.auth.signOut();
	}
	
	sendVerificationEmail() {
		if (!this.isUserVerified()) {
			return this.afAuth.auth.currentUser.sendEmailVerification();
		}
	}
	private isUserVerified() {
		return this.afAuth.auth.currentUser.emailVerified;
	}
	getAuth() {
		return this.afAuth.auth;
	}
	getCurrentUserUid(){
		return this.afAuth.auth.currentUser.uid;
	}
	deleteUser() {
		if (this.afAuth.auth.currentUser.providerId == null) {
			console.log('This user doesnt exits already');
		}
		return this.afAuth.auth.currentUser.delete();
	}
	setUser(user) {
		this.user = user;
	}
	getUser() {
		return this.user;
	}
}
