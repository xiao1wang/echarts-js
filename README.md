## 关于echarts文件说明
 js中包含中国大部分省市地图和个别国家地图
 
 文件中的内容是GeoJSON格式的数据，您会看到coordinates的属性值有时候提供的是经纬度，有时候提供的是压缩后值，该压缩是通过调用echarts中提供的压缩方法，进行压缩的，能够很好的被echarts识别，同时也节省了占用空间
 
## 通过程序压缩
https://blog.csdn.net/isea533/article/details/79194819

## 压缩在线使用工具
该工具需要提供json格式，基于经纬度的值，压缩导出对应的数据
http://blog.giscafer.com/mapshaper-plus/

