#本科毕设

基于hls.js的流式转码

---
目前hls.js在ts转fmp4上是整个ts转码的，毕设内容是要做到对ts流式转码，下多少转多少。

---

#基于hls.js版本 

661d31e

---

#276f4bb 版本（demo）
初步完成。
目前问题：
	1. 粒度过小会造成重复initSegment导致出错 
	2. buf裁剪时会导致buf出现不连续，播放时卡顿 
	3. ……

做了：
	1. fetch流式下载 
	2. 粒度控制 
	3. 调度修改，整个ts转完才下下一个ts 
	4. demux加buf，以pes为单位转码 
	5. fetch的取消下载 
	6. 注释对chrome的workaround，使chrome能更小粒度播放
