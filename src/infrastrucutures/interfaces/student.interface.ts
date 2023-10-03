/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface IStudent extends Document {
  name?: string;
  rollNumber?: number;
  class?: string;
  gender?: string;
  marks?: number;
}
