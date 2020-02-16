from flask import Flask
from flask import request
from flask import jsonify
from sklearn.feature_extraction.text import CountVectorizer
import pickle

app = Flask(__name__) 
model = pickle.load(open('model.pkl','rb'))
count_vect = CountVectorizer()

@app.route('/data', methods=['POST', 'GET'])

def read_json():
    
    if request.method == 'POST':
      content = request.get_json()
      print(content)
      #print(content)
      #return 'get content success'
      result = predictOutcome(content)
      return result

    else:
      content = request.json
      print('content posted')
      return 'post content success'

def predictOutcome(content):
    data=[]
    for i in content:
      data.append(content.get(i))
    print(data)
    prediction = model[0].predict(model[1](data))
    preDict = {}
    for i in content:
      for x in prediction:
        preDict[i] = str(x)
    results = preDict
    print(type(results))
    #output = prediction
    return results


if __name__ == "__main__":
    app.run(host='0.0.0.0')