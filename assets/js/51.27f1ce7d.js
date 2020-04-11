(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{251:function(t,_,v){"use strict";v.r(_);var r=v(4),e=Object(r.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"node-js-多进程底层原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-js-多进程底层原理","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js 多进程底层原理")]),t._v(" "),v("ul",[v("li",[t._v("彻底搞懂进程、线程、协程之间的关系")]),t._v(" "),v("li",[t._v("彻底搞懂 Node.js 的多进程模型")]),t._v(" "),v("li",[t._v("如何用有限的计算机资源，搭建更高性能的服务端")])]),t._v(" "),v("p",[t._v("先来罗列一下这两个概念简洁的官方解释")]),t._v(" "),v("p",[v("strong",[t._v("对操作系统来说，线程是最小的执行单元，进程是最小的资源管理单元。")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("进程")]),t._v("：处于执行期的代码，正在运行的程序，它不仅包括目标代码，还有数据、资源、状态和虚拟的计算机。")]),t._v(" "),v("li",[v("strong",[t._v("线程")]),t._v("：在一个程序里的一个执行路线就叫做线程（thread）。更准确的定义是：线程是“一个进程内部的控制序列”。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/i2c3c.png-style1",alt:"image-20200323230147832"}})]),t._v(" "),v("h3",{attrs:{id:"进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),v("p",[v("strong",[t._v("运行中的代码+他占有的资源 = 进程")])]),t._v(" "),v("p",[v("strong",[t._v("进程其实是处于执行期的程序和相关资源的总称，里面包含了要执行的代码段，需要用到的文件，端口，硬件资源，很常见的一种说法是进程是资源分配的最小单位")]),t._v("，这句话更直白的说就是，要运行某个可执行的代码段会需要某些资源，当这个代码段运行起来的时候，这些资源也必须被分配给他。")]),t._v(" "),v("h3",{attrs:{id:"线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),v("p",[t._v("上面我们提到了，进程是资源分配的最小单位，意味着进程和资源是"),v("strong",[t._v("1:1")]),t._v("，与之对应的一句话就是，线程是调度的最小单位，进程和线程是一个"),v("strong",[t._v("1:n")]),t._v("的关系。")]),t._v(" "),v("h3",{attrs:{id:"进程和线程存在的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程存在的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程和线程存在的问题")]),t._v(" "),v("p",[t._v("1.涉及到同步锁。")]),t._v(" "),v("p",[t._v("2.涉及到线程阻塞状态和可运行状态之间的切换。")]),t._v(" "),v("p",[t._v("3.涉及到线程上下文的切换。")]),t._v(" "),v("p",[t._v("既然说到了进程的切换，那我们可以细探一下进程切换的开销。一个进程会独占一批资源，比如使用寄存器，内存，文件等。")]),t._v(" "),v("p",[t._v("当切换的时候，首先会保存现场，将一系列执行的中间结果保存起来，存放在内存中的程序的代码和数据，它的栈、通用目的寄存器的内容、程序计数器、环境变量以及打开的文件描述符的集合，这个状态叫做"),v("strong",[t._v("上下文")]),t._v("。")]),t._v(" "),v("p",[t._v("然后在他恢复回来的时候又需要将上述资源切换回去。显而易见，切换的时候需要保存的资源越少，系统性能就会越好，线程存在的意义就在于此。线程有自己的上下文，包括唯一的整数线程 ID，栈、栈指针、程序计数器、通用目的寄存器和条件码。")]),t._v(" "),v("h3",{attrs:{id:"协程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协程","aria-hidden":"true"}},[t._v("#")]),t._v(" 协程")]),t._v(" "),v("p",[t._v("线程和进程是操作系统的支持带来的优化，而协程本质上是一种"),v("strong",[t._v("应用层面的优化")]),t._v("了。")]),t._v(" "),v("p",[t._v("协程可以理解为特殊的函数，这个函数可以在某个地方挂起，并且可以重新在挂起处外继续运行，简单来说，"),v("strong",[t._v("一个线程内可以由多个这样的特殊函数在运行")]),t._v("，但是有一点必须明确的是，一个线程的多个协程的运行是"),v("strong",[t._v("串行")]),t._v("的。")]),t._v(" "),v("h3",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),v("p",[t._v("如果是多核 CPU，多个进程或一个进程内的多个线程是可以并行运行的，但是一个线程内协程却绝对是串行的，无论 CPU 有多少个核。")]),t._v(" "),v("p",[t._v("毕竟协程虽然是一个特殊的函数，但仍然是一个函数。一个线程内可以运行多个函数，但这些函数都是串行运行的。当一个协程运行时，其它协程必须挂起。")]),t._v(" "),v("h2",{attrs:{id:"并发和并行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发和并行","aria-hidden":"true"}},[t._v("#")]),t._v(" 并发和并行")]),t._v(" "),v("p",[t._v("首先要搞清楚 cpu 到底是干嘛的。cpu 的作用用两个字来讲就是："),v("strong",[t._v("计算")]),t._v("。")]),t._v(" "),v("p",[t._v("我们的各种花里胡哨的代码，最终"),v("strong",[t._v("编译完")]),t._v("真正执行的时候也无非这两个字：计算。上面提到了进程一定是在运行的代码，那代码的运行必然就是在 CPU 上。")]),t._v(" "),v("p",[t._v("我们有几个 cpu 意味着我们可以有几个程序同时在计算，这就是"),v("strong",[t._v("并行")]),t._v("，就如同小时候会想有鸣人的影分身，就可以让他们一个来写数学，一个来写语文，一个来写英语。")]),t._v(" "),v("p",[t._v("与多核对应的就是苦逼的单核今计算机了，就像没有影分身的我，这个时候也有多个作业要做，咋整？半个小时写语文，半个小时写数学，再半个小时写语文，再来半小时写数学。。（强行时间片轮转了）这是语文数学英语也都同时写了，但实际上只有我苦逼的一个人，这就是分时"),v("strong",[t._v("并发")]),t._v("，但非并行。")]),t._v(" "),v("p",[t._v("总结下就是"),v("strong",[t._v("并行一定并发，并发未必并行")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"node-中的线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-中的线程","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 中的线程")]),t._v(" "),v("p",[t._v("Node 设计成是个单进程单线程模型。")]),t._v(" "),v("h3",{attrs:{id:"node-多进程模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-多进程模型","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 多进程模型")]),t._v(" "),v("p",[t._v("既然一个 Node 进程只能有一个线程，那想通过单进程多线程的姿势来压榨 cpu（类似于 Java）应该是黄了，但 Node 支持"),v("strong",[t._v("多进程")]),t._v("模型。")]),t._v(" "),v("p",[t._v("Node 提供了 child_process 模块，通过 child_process.fork()函数来进行进程的复制。")]),t._v(" "),v("p",[t._v("如下图，master 调用 child_process.fork 进程，被 fork 出的进程为 worker。")]),t._v(" "),v("p",[t._v("child_process 模块给予 Node 创建子进程的能力，父进程与子进程之间是一种 master/worker 的工作模式。")]),t._v(" "),v("p",[t._v("这种模式在"),v("strong",[t._v("分布式系统")]),t._v("中随处可见，但高手总是能撒豆成兵，Node 在单机上对父子进程采用了这种管理模式，这种模式很像经典的 reactor 模式（只是 reactor 是主线程），利用父进程来做主进程，并且将任务 dispatch 到 worker 进程。")]),t._v(" "),v("p",[t._v("通常会阻塞的操作分发给 worker 来执行（查 db，读文件，进程耗时的计算等等），"),v("strong",[t._v("master 上尽量编写非阻塞的代码")]),t._v("。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/ofbnk.png-style1",alt:"image-20200324145141803"}})]),t._v(" "),v("h3",{attrs:{id:"node-多进程通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-多进程通信","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 多进程通信")]),t._v(" "),v("p",[t._v("既然提到了主从进程，那避免不了的一个问题就是他们之间的通信。")]),t._v(" "),v("p",[t._v("进程通信的姿势很多，例如基于 socket，基于管道，基于 mmap 内存映射等等，这里我们主要讨论"),v("strong",[t._v("Node 的通信")]),t._v("，这里和大家先简单的讲解两个概念："),v("strong",[t._v("文件描述符")]),t._v("、"),v("strong",[t._v("管道")]),t._v("。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/rbz4v.png-style1",alt:"image-20200324145219781"}})]),t._v(" "),v("h4",{attrs:{id:"文件描述符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件描述符")]),t._v(" "),v("p",[t._v("文件描述符是操作系统用来做文件管理的一个概念，如上图所示，每个进程会有一个自己的文件描述符表，里面包含了"),v("strong",[t._v("文件描述符标志和文件指针")]),t._v("，每个进程自己的表都是从 0 开始，然后由文件指针来指向同一个系统级的打开文件表，打开文件表里面会记录文件偏移量（这个文件被读写到了哪个位置）、inode 指针。")]),t._v(" "),v("p",[t._v("再由 inode 指针来指向系统级的 inode 表，inode 表就是真正维护操作系统文件本身的一个实体了，里面包含了文件类型，大小，create time 等等～")]),t._v(" "),v("p",[t._v("其实系统中的文件描述符不一定是指向一个磁盘文件，也可以能是指向一个网络的 socket 这种，站在"),v("strong",[t._v("Linux")]),t._v("的角度上来说，操作系统把一切都抽象为文件，网络数据，磁盘数据等等，都是用文件描述符来做维护。")]),t._v(" "),v("p",[t._v("讲了文件描述符，我们可以大致感知到进程要读东西，一定需要一个媒介，那我们父子进程之间的通信也一定需要一个介质来通信。")]),t._v(" "),v("p",[t._v("接下来我们抛出管道的概念，如同其名字，管道一定是用来连通两个东西的，就像家里的水管，一个入口，一个出口。")]),t._v(" "),v("h3",{attrs:{id:"管道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#管道","aria-hidden":"true"}},[t._v("#")]),t._v(" 管道")]),t._v(" "),v("p",[t._v("进程会有自己的文件描述符表，我们在 fork 进程的时候父进程也会把自己的文件描述符拷贝给子进程。")]),t._v(" "),v("p",[t._v("如果我们判断是子进程，就"),v("strong",[t._v("关闭他的读文件描述符")]),t._v("，如果是父进程，就"),v("strong",[t._v("关闭他的写文件描述符")]),t._v("。")]),t._v(" "),v("p",[t._v("这时，如下图所示，我们会实现一个单向通信，操作系统调用 pipe（创建管道）的时候，会新建一片内存空间，这片内存专用与两个进程通信，这应证了我们上面所说的，系统会把很多东西抽象成文件，比如这里就是把那一片共用内存抽象了起来，之后子进程通过 fd[1]，往那片内存区域写入数据，父进程通过 fd[0]来读，这里就实现了一个"),v("strong",[t._v("单工通信")]),t._v("。")]),t._v(" "),v("p",[t._v("或许上面讲的有点晦涩，我们来举一个不完全恰当的栗子，你住长江头，妹子住长江尾，河流就像你们之间的管道，你想跟她之间有所交流咋整？只需写一封信，顺着江流流下去（write），她在那边接收就行（read）。你们之间就是一个单向的管道通信。")]),t._v(" "),v("p",[t._v("但单向肯定是不行的，如何实现一个双工通信呢，很简单，用两个管道就 OK 了。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/m5tae.png-style1",alt:"image-20200324153328522"}})]),t._v(" "),v("p",[t._v("接下来我们回到最初的起点，Node 之间的进程如何通信，其实也不过如此。Node 自己抽象了一个 libuv 的概念，根据不同操作系统有不同的底层实现，我们上面讲到的双工管道通信就是其中一种。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/ighyp.png-style1",alt:"image-20200324153346587"}})]),t._v(" "),v("h2",{attrs:{id:"node-句柄传递"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-句柄传递","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 句柄传递")]),t._v(" "),v("p",[t._v("想想我们平时"),v("strong",[t._v("调用服务")]),t._v("的方式，最简单的就是我们的 http，用浏览器发起"),v("strong",[t._v("小电影")]),t._v("请求，小电影服务端接收到并返回结果，然后开始一个个不眠的夜晚。")]),t._v(" "),v("p",[t._v("我们的请求本质就是去访问小电影服务器，服务器对应的端口收到了请求然后做相应处理并且返回结果。看小电影最不能接受的就是卡顿。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/h65fx.png-style1",alt:"image-20200324153646514"}})]),t._v(" "),v("p",[t._v("上图是一种可以实现的架构，由 "),v("strong",[t._v("master 监听")]),t._v("默认的 80 端口，用户的请求都打在 80 上，其他子进程监听一个别的端口，当父进程收到后往子进程监听的端口写数据，子进程来做处理。")]),t._v(" "),v("p",[t._v("这里看似可以实现，实则浪费了太多文件描述符，上面讲到了每个进程都有文件描述符表，而每个 socket 的读写也是基于文件描述符，操作系统的文件描述符是有限的，这样的设计显然不够优雅，拓展性不强。")]),t._v(" "),v("p",[t._v("为什么不直接让每个进程都去监听 80，干嘛还要转一次？But，最终会发现直接的监听最后只会有一个进程抢占端口成功，其他进程会抛出端口被占用的"),v("strong",[t._v("异常")]),t._v("。")]),t._v(" "),v("p",[t._v("为了解决这个问题，Node 用了另外一种架构模式。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/21pme.png-style1",alt:"image-20200324153825732"}})]),t._v(" "),v("p",[t._v("一开始依然是 master 进程监听 80，当收到用户请求之后，"),v("strong",[t._v("master 并不是直接把这些数据扔给 worker")]),t._v("，而是在 80 端口接收到数据后，生成对应的 socket，再把该 socket 对应的文件描述符通过管道传给 worker，一个 socket 意味着服务端和客户端的一个数据通道，也就意味着 master 把跟客户端的数据通道传给了 worker。")]),t._v(" "),v("p",[t._v("如下图，在之后 master 停止监听 80port，因为已经把文件描述符给了 worker，之后 worker 直接监听这个套接字即可。")]),t._v(" "),v("p",[t._v("于是就有了下面那种模式，多个 worker 直接监听同一个 port。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/tgmtb.png-style1",alt:"image-20200324153851556"}})]),t._v(" "),v("p",[t._v("这个时候小伙伴们可能很疑惑，为啥这个时候不会"),v("strong",[t._v("端口冲突")]),t._v("？？")]),t._v(" "),v("p",[t._v("这里的关键在于两个点。")]),t._v(" "),v("p",[t._v("第一个是，Node 对每个端口监听设置了"),v("strong",[t._v("SO_REUSEADRR")]),t._v(",表示可以允许这个端口被多个进程监听。")]),t._v(" "),v("p",[t._v("第二个点是，用这个的前提是每个监听这个端口的进程，监听的文件描述符要相同。")]),t._v(" "),v("p",[t._v("之前讲文件描述符的时候提到过，文件描述符表是每个进程"),v("strong",[t._v("私有")]),t._v("的，相互之间不可见，那对这个端口他们也会有各自的文件描述符，这样就无法利用 SO_REUSEADRR 的特性。")]),t._v(" "),v("p",[t._v("那为什么通过 master 传给 worker 就可以了呢？")]),t._v(" "),v("p",[v("strong",[t._v("因为 master 在与 worker 通信的时候，每个子进程收到的文件描述符都是一样的")]),t._v("（通过 master 传入，不理解的参见上面双工通信的讲解），这个时候就是所有子进程监听相同的 socket 文件描述符，就可以实现多个进程监听同一个端口的目标啦~😝😝😝。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("所以，Node 利用 master/worker 模式来利用多核资源，利用 SO_REUSEADRR 与句柄（文件描述符）传递来使多个进程同时监听同一个端口，提高吞吐量。")])])},[],!1,null,null,null);_.default=e.exports}}]);