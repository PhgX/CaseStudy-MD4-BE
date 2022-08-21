import jwt from 'jsonwebtoken';

export const SECRET_KEY = '200699';

export const checkIsAdmin = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'Xin hãy đăng nhập!'
            });
        } else {
            jwt.verify(accessToken, SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'Xin hãy đăng nhập!'
                    });
                } else {
                    if (data.role === 'admin') {
                        next();
                    } else {
                        res.status(401).json({
                            message: 'Bạn không có quyền truy cập!'
                        });
                    }                 
                }
            });
        }
    } else {
        res.status(401).json({
            message: 'Xin hãy đăng nhập!'
        });
    }
}
