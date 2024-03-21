export class WordPress {
  
  constructor(wpConfig) {
    this.url = wpConfig.url;
    this.headers = {
      Authorization: "Basic " + Buffer.from(`${wpConfig.username}:${wpConfig.password}`).toString('base64'),
      "Content-Type": "application/json",
    };
  }

  async createPost(post, callback) {
    try {
      const response = await axios.post(`${this.url}/wp-json/wp/v2/posts`, post, { headers: this.headers });
      
      if(callback)
        callback();

      return response.data;
    } catch (error) {
      throw new Error(`Error while creating post: ${error}`);
    }
  }

}