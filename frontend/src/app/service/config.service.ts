import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl:  string = 'http://localhost:3000/';

  userColumns: ITableColumn[] = [
   {key: "_id", title: "#"},
   {key: "firstName", title: "First Name"},
   {key: "lastName", title: "Last Name"},
   {key: "email", title: "Email"},
   {key: "password", title: "Password"},
   {key: "role", title: "Role"},
  ];

  plantColumns: ITableColumn[] =[
  {key: "_id", title: "#"},
   {key: "name", title: "Name"},
   {key: "latinName", title: "Last Name"},
   {key: "colour", title: "Colour"},
   {key: "waterDemand", title: "Demand of water"},
   {key: "lightDemand", title: "Demand of sunlight"},
   {key: "soilDemand", title: "Soil"},
   {key: "blooming", title: "Months of blooming"},
   {key: "lifeCycles", title: "Lifespan"},
   {key: "type", title: "Type"},
   {key: "toxic", title: "Toxic"},
   {key: "evergreen", title: "Evergreen"},
   {key: "url", title: "Link"},
];

 gardenColumns: ITableColumn[] = [
  {key: "_id", title: "#"},
  {key: "user", title: "User"},
  {key: "garden", title: "Plants"},
  {key: "note", title: "Note"},
 ];

 sampleHortusColumns: ITableColumn[] = [
  {key: "_id", title: "#"},
  {key: "name", title: "Name"},
  {key: "plantList", title: "PlantList"},
  {key: "note", title: "Note"},
  {key: "url", title: "Link"},
 ];

 shopColumns: ITableColumn[] = [
  {key: "_id", title: "#"},
  {key: "name", title: "Name"},
  {key: "city", title: "City"},
  {key: "address", title: "Address"},
  {key: "url", title: "Link"},
  {key: "note", title: "Note"},
 ];


  constructor () { }
}
