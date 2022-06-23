import { chakra } from '@chakra-ui/react';

const findImagePath = a => a.split(' ').find(b => b.includes('.'));

function Picture({ sources = [], src, alt, ...rest }) {
  //sources: [{srcset:'string',media?:'string'},...]

  if (!(sources.length || src?.trim()))
    throw new Error(
      'sources and src both props are not defined, minimally one of them is required'
    );

  src = src?.trim() || findImagePath(sources[0].srcset);

  if (!sources.length) {
    return <chakra.img src={src} alt={alt} {...rest} />;
  } else {
    return (
      <picture>
        {sources.map(item => (
          <source key={item.srcset} srcSet={item.srcset} media={item.media} />
        ))}
        <chakra.img src={src} alt={alt} {...rest} />
      </picture>
    );
  }
}

export default Picture;
