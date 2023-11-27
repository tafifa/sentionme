## Project Structure
```plaintext
backend/
|-- __tests__/                  # Testing folder for API tests using Jest
|   |-- predict.test.js         # Jest testing file for the predict API
|-- src/                        # Source code directory
|   |-- api/                    # API directory
|   |   |-- predict/            # API for sentiment prediction
|   |   |   |-- handler.js      # Route handler for predict API (supports POST and GET methods)
|   |   |   |-- loadModel.js    # Module to load the machine learning model (H5 and JSON formats in models folder)
|   |   |   |-- routes.js       # Routing file for the predict API
|   |   |-- dataset/            # API for saving new input to the dataset
|   |   |   |-- handler.js      # Route handler for dataset API (supports GET and POST methods)
|   |   |   |-- routes.js       # Routing file for the predict API
|   |   |   |-- save.py         # Python script to save new input from the handler to dataset.csv in models folder
|   |-- models/                 # Directory to store machine learning models
|   |   |-- model.h5            # Machine learning model in H5 format
|   |   |-- model.json          # Machine learning model in JSON format
|   |   |-- model.ipynb         # Jupyter notebook for creating the machine learning model
|   |   |-- dataset/            # Folder to store datasets
|   |   |   |-- dataset.csv     # Dataset file to store all dataset entries
|   |-- app.js                  # Main file to run the web server
|-- package.json                # Project configuration file
```
