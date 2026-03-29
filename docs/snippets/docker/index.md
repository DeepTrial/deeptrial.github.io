# Docker 常用命令

## 镜像操作

```bash
# 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest

# 查看本地镜像
docker images

# 删除镜像
docker rmi nginx:latest

# 构建镜像
docker build -t myapp:v1 .
```

## 容器操作

```bash
# 运行容器
docker run -d -p 80:80 --name mynginx nginx

# 查看运行中的容器
docker ps

# 查看所有容器（包括停止的）
docker ps -a

# 停止容器
docker stop mynginx

# 启动容器
docker start mynginx

# 进入容器
docker exec -it mynginx bash

# 查看容器日志
docker logs -f mynginx

# 删除容器
docker rm mynginx
```

## 清理命令

```bash
# 删除所有停止的容器
docker container prune

# 删除所有未使用的镜像
docker image prune -a

# 清理所有未使用的资源
docker system prune -a
```

## 常用 Compose 模板

### Nginx

```yaml
version: '3.8'
services:
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./html:/usr/share/nginx/html
    restart: always
```

### MySQL

```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: mydb
    volumes:
      - mysql_data:/var/lib/mysql
    restart: always

volumes:
  mysql_data:
```

### Redis

```yaml
version: '3.8'
services:
  redis:
    image: redis:latest
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: always

volumes:
  redis_data:
```
