## Vuex示例

### 一、简单的Vuex的示例

	模拟一个聊天室

### 二、涉及技术

	1、State: store下存储数据的对象

	2、Getter：获取Store中state定义的数据

	3、Mutation: Mutation存储一些方法，方法用来改变state的值, mutation必须是同步函数

	4、Action：处理事务，Action通过commit()方法来调用mutation中的方法在改变来改变state的值，而不是直接改变state中的值

			分发Action: store.dispatch()方法触发

	5、modules: 分stroe分割到模块，每个模块都有自己的state、mutation、action、getters
