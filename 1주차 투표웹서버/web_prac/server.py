from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

votes = {"Option A": 0, "Option B": 0}

@app.route('/')
def index():
    total_votes = votes["Option A"] + votes["Option B"]

    if total_votes == 0:
        percent_a = 0
        percent_b = 0
    else:
        percent_a = round(((votes["Option A"] / total_votes) * 100), 2)
        percent_b = round(((votes["Option B"] / total_votes) * 100), 2)

    return render_template('index.html', votes=votes, percent_a=percent_a, percent_b=percent_b)

@app.route('/vote', methods=['POST'])
def vote():
    choice = request.form.get("vote")
    if choice in votes:
        votes[choice] += 1
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host='10.10.0.146', port=5000)
