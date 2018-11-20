import { Injectable } from '@angular/core';

@Injectable()
export class HelperFunctions{
    constructor(){}

    hasPermission(permission){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let parsedJWT = this.parseJWT(currentUser.token);

        let returnValue = false;

        for(let userPermission of parsedJWT.permissions){
            if(userPermission == permission){
                returnValue = true;
            }
        }

        return returnValue;
    }

    parseJWT(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }
}