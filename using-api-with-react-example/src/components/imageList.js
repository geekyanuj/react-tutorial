import ImageShow from './ImageShow';

function ImageList({images}){

    const renderedImages = images.map((image)=>{
        return <ImageShow image={image}></ImageShow>
    });

    return <div>{renderedImages}</div>
};

export default ImageList;