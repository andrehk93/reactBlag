import mysql.connector

mydb = mysql.connector.connect(
    host="mysql.stud.ntnu.no",
    user="fotball_blag",
    passwd="b-laget",
    database="fotball_blag"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM chat")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)
  print("\n")
