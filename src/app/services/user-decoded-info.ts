import { Time } from "@angular/common"

export interface UserDecodedInfo {
    
    user:{
        "nome": string,
        "cognome":string,
        "expiration time":Time,
        "issuer":string,
        "cidice":string,
        "token id":string,
        
    }
}
