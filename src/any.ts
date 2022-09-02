import axios from "axios";

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// 参考
// https://github.com/axios/axios
// Make a request for a user with a given ID
axios.get(url).then(function (response) {

  interface Article {
    id: number,
    title: string,
    description:string
  }

  let data: Article[] = response.data;
  // let data: any = response.data;
  data = [{
    id: 1,
    title: 'title',
    description: 'description'
  }];
    console.log(data);
  })