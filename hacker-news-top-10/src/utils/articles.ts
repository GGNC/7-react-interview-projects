import axios from "axios";
import { GET_ALL_ARTICLES, GET_ARTICLE_BY_ID_URL } from "./consts/urls";

export async function getAllArticles() {
  const response = await axios.get(GET_ALL_ARTICLES);
  return response.data;
}

export async function getArticleById(articleId: string) {
  const response = await axios.get(
    `${GET_ARTICLE_BY_ID_URL}/${articleId}.json`
  );
  return response.data;
}
