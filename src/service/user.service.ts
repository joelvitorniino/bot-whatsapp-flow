import { ChatId } from '@open-wa/wa-automate';
import { User } from './../models/user';
import { ReqReturn } from './../models/utils';
import axios from 'axios';
import dotenv from 'dotenv';
import { returnSanitizer } from './utils.service';
dotenv.config();

const http = axios.create({
  baseURL: process.env.BASEURL_BOTINFORS,
  headers: {
    'Content-Type': 'application/json'
  }
});


export async function getUser(id: ChatId): Promise<ReqReturn<User>> {
  return http.get(`/users/${id}`).then((response) => {
    return returnSanitizer(response);
  }).catch((err) => {
    return returnSanitizer(err.response);
  });  
}

export async function submitNewUser(id: ChatId, name: string): Promise<boolean> {
  return http.post(`/users`, { id, name, step: 0 }).then((response) => {
    return true;
  }).catch((err) => {
    return false;
  });
}

export async function updateUserStep(id: ChatId, step: number): Promise<boolean> {
  return http.patch(`/users/${id}`, { step }).then((response) => {
    return true;
  }).catch((err) => {
    return false;
  });
}