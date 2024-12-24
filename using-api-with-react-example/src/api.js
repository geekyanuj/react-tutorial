import axios from 'axios';

const searchImages = async (term)=>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID XFbGsBLGXWzzdOo-wG93ag7feBzx3IVdJO5OIDM5OwI'
        },
        params:{
            query: term
        }
    });

    return response;
};

export default searchImages;



