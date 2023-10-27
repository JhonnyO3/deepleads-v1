export const BASE_URL = "https://deepleads-api.azurewebsites.net/api/auth/";
 
export const BASE_URL_DEV = "https://deepleads-apiv1.azurewebsites.net/api/auth/";
 
export const BASE_MINERAR = 'https://deepleads-api.azurewebsites.net/api/mineracao/generate/leads/by-id?id=';
export const BASE_CHAT = 'https://deepleads-api.azurewebsites.net/api/';
// export const BASE_LEADS = 'https://deepleads-api.azurewebsites.net/api/';
export const BASE_LEADS = 'https://deepleads-apiv1.azurewebsites.net/api/mineracao/get/leads/by-id?id=';
 
 
export const BASE_MINERAR_DEV = 'https://deepleads-apiv1.azurewebsites.net/api/mineracao/generate/leads/by-id?id=';
export const BASE_CHAT_DEV = 'https://deepleads-apiv1.azurewebsites.net/api/openai/generate/ia/'
 
export const BASE_UPDATE_USUARIO = 'https://deepleads-apiv1.azurewebsites.net/api/usuario/atualizar/'

export const BASE_DISPARAR_CAMPANHA = 'https://deepleads-apiv1.azurewebsites.net/api/whatsapp/send/message'

export const TOKEN_POST = ( body ) => {
  return {
    url: BASE_URL_DEV + 'signin',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}

export const TOKEN_VALIDATE_POST = ( token ) => {
  return {
    url: BASE_URL_DEV + 'signin',
    options: {
      method: "POST",
      Authorization: 'Bearer ' + token,
    }
  }
}

export const USER_GET = ( body ) => {
  return {
    url: BASE_URL_DEV + 'signin',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}

export const USER_POST = ( body ) => {
  return {
    url: BASE_URL_DEV + 'signup',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}