# 基于node14-alpine
FROM node:14-alpine

# 把 package.json package-lock.json 复制到/app目录下
# 为了npm install可以缓存
COPY package*.json /app/ 

# 切换到app目录 同cd
WORKDIR /app

# 安装依赖
RUN npm install

# 把所有源代码拷贝到/app
COPY . /app

# 设置端口
EXPOSE 8000

# 运行启动
ENTRYPOINT ["npm", "run"]
CMD ["dev"]