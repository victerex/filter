export default class PostService {

    
  static async getArray(value) {
  let response = [    
                  "california",
                  "everything",
                  "aboveboard",
                  "washington",
                  "basketball",
                  "weathering",
                  "characters",
                  "literature",
                  "contraband",
                  "appreciate",
              ];
  return (
      value ?  response.filter((item) => item.includes(value)) : response
      )
}
}