/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface IStudent extends Document {
  first_name?: string;
  last_name?: string;
  roll_no?: number;
  class?: string;
  gender?: string;
  phone_no?: string;
}
