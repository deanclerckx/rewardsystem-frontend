import { Injectable } from '@angular/core';

@Injectable()
export class HelperFunctions{
    constructor(){}

    hasPermission(user, permission){
        let parsedJWT = this.parseJWT(user.token);

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