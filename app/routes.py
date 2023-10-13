from flask import render_template
from app import app

@app.route("/")
def landing():
    return render_template("landing.html")

@app.route("/search")
def search():
    return render_template("search.html")

@app.route("/listings")
def listings():
    return render_template("listings.html")
