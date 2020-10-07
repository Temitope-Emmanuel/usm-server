import {Field,Int,ObjectType} from "@nestjs/graphql"
import {User as Author} from "../../user/models/user.model"

@ObjectType()
export class Article {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  body: string;
  
  @Field(type => Author)
  author:Author

  @Field(type => Date)
  createdAt:Date;

  @Field(type => Date)
  updatedAt:Date
}