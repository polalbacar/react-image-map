## ImageMap
[![Build Status](https://travis-ci.org/qiuziz/react-image-map.svg?branch=master)](https://travis-ci.org/qiuziz/react-image-map)
![npm](https://img.shields.io/npm/v/@qiuz/react-image-map)
![David](https://img.shields.io/david/dev/qiuziz/react-image-map)

> A React Image Map

### Installation
```sh
$ yarn add @qiuz/react-image-map
# or
$ npm install @qiuz/react-image-map
```

### Get mapArea
open [https://qiuziz.github.io/react-image-map](https://qiuziz.github.io/react-image-map/)

### Usage
```js
import { ImageMap } from '@qiuz/react-image-map'
```

### Example
```jsx
const img = 'https://images.app.goo.gl/STr3xKQMbdjLketR7';

const mapArea = [{"left":"0%","top":"6%","height":"12%","width":"33%"}];

const onMapClick = (index: number) => {
	const tip = `click map${index + 1}`;
	console.log(tip);
	alert(tip);
}

<ImageMap
	className="usage-map"
	src={img}
	map={formarMapArea(mapArea)}
	onMapClick={onMapClick}
/>

// in hooks
const ImageMapComponent = React.useMemo(() => <ImageMap className="usage-map" src={img} map={formarMapArea(mapArea)} onMapClick={onMapClick} />, [mapArea, img]);

return (
	...

	{ImageMapComponent}

	...
)
```
