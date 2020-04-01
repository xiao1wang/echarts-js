## 关于echarts文件说明
 js中包含中国大部分省市地图和个别国家地图
 
 文件中的内容是GeoJSON格式的数据，您会看到coordinates的属性值有时候提供的是经纬度，有时候提供的是压缩后值，该压缩是通过调用echarts中提供的压缩方法，进行压缩的，能够很好的被echarts识别，同时也节省了占用空间
 
## 使用方式
由于提供的数据格式有部分是json形式的，需要在程序中通过ajax方式获取，并使用echarts提供的registerMap(mapName: string, geoJson: Object, specialAreas?: Object)方式注册使用。这样在 geo 组件或者 map 图表类型中就能使用该注册名称。
针对方法中的specialAreas参数，主要是将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看
 
 示例 [USA Population Estimates](https://www.echartsjs.com/examples/zh/editor.html?c=map-usa)：

```javascript
echarts.registerMap('USA', usaJson, {
  // 把阿拉斯加移到美国主大陆左下方
  Alaska: {
      // 左上角经度
      left: -131,
      // 左上角纬度
      top: 25,
      // 经度横跨的范围
      width: 15
  },
  // 夏威夷
  Hawaii: {
      left: -110,
      top: 28,
      width: 5
  },
  // 波多黎各
  'Puerto Rico': {
      left: -76,
      top: 26,
      width: 2
  }
});
```

## 通过程序压缩经纬度
https://blog.csdn.net/isea533/article/details/79194819

## 在线压缩使用工具，并提供各种输出方式，能够直接echarts使用的js文件
该工具需要提供json格式，基于经纬度的值，压缩导出对应的数据
http://blog.giscafer.com/mapshaper-plus/

