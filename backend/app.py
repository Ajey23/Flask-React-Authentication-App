from flask import Flask, jsonify, request, session
from flask_pymongo import PyMongo
import bcrypt
import jwt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS, cross_origin


app = Flask(__name__)
jwt = JWTManager(app)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/flask_react_app"
mongo = PyMongo(app)

app.secret_key = 'secret key'
app.config["JWT_SECRET_KEY"] = "this is secret key"

@app.route("/")
def testpage():
    return jsonify(message='all good!')


@app.route("/adminRegister", methods=['POST'])
def adminRegister():
    if request.method == 'POST':
        allUsers = mongo.db.flask_react_app
        user = allUsers.find_one({'email': request.json['email']})
        companyName = allUsers.find_one(
            {'companyName': request.json['companyName']})
        phone = allUsers.find_one({'phone': request.json['phone']})
    
        if user:
            return jsonify(message='Email already exists'), 401
        if companyName:
            return jsonify(message='Company name already exists'), 401
        if phone:
            return jsonify(message='Phone number already exists'), 401
    
        if request.json['password'] != request.json['cpassword']:
            return jsonify(message='Password not matching!!'), 401
        
        hashpw = bcrypt.hashpw(
            request.json['password'].encode('utf-8'), bcrypt.gensalt()
        )
        
        hashCpw = bcrypt.hashpw(
            request.json['cpassword'].encode('utf-8'), bcrypt.gensalt()
        )
        
        access_token = create_access_token(identity=request.json['email'])

        allUsers.insert_one({
            'email': request.json['email'],
            "companyName": request.json['companyName'],
            "phone": request.json['phone'],
            'password': hashpw,
            'cpassword': hashCpw,
            'tokens': [
                {
                    'token': str(access_token)
                }
            ]
        })

        return jsonify(token=str(access_token)), 201


@app.route("/adminLogin", methods=['POST'])
def adminLogin():
    allUsers = mongo.db.flask_react_app
    user = allUsers.find_one({'email': request.json['email']})

    if user: 
        if bcrypt.checkpw(request.json['password'].encode('utf-8'), user['password']):
            access_token = create_access_token(identity=request.json['email'])
            user['tokens'].append({'token': str(access_token)})
            # Use update_one to update the document
            allUsers.update_one({'email': request.json['email']}, {'$set': {'tokens': user['tokens']}})
            return jsonify(token=str(access_token)), 201

    return jsonify(message='Invalid email or password'), 401

@app.route("/getAdminData", methods=['POST'])
def getAdminData():
    allUsers = mongo.db.admins
    user = dumps(
        list(allUsers.find({'tokens.token': request.json['auth']})), indent=2)

    if user:
        user = json.loads(user)
        return jsonify(user), 201

    return jsonify(message='Something went wrong'), 401

@app.route("/logoutAdmin", methods=['POST'])
def logoutAdmin():
    allUsers = mongo.db.flask_react_app
    user = allUsers.find_one({'tokens.token': request.json['auth']})

    if user:
        user['tokens'] = []
        allUsers.save(user)
        return jsonify(message='Logout Successfully!'), 201
    return jsonify(message='Something went wrong!'), 401

if __name__ == '__main__':
    app.run(debug=True)