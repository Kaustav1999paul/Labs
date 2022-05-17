class A:
	def __init__(self, name, age, basicPay, HRA, DA, Deduct):
		self.name = name
		self.age = age
		self.basicPay = basicPay
		self.HRA = HRA
		self.DA = DA
		self.Deduct = Deduct

# Taking input form the user
pName = input("Enter Name: ")
pAge = input("Enter Age: ")
pBasic = input("Enter Basic Pay: ")
pHRA = input("Enter HRA: ")
pDA = input("Enter DA: ")
pDeduct = input("Enter Deduct: ")

# Create an onject of the class
obj = A(pName, pAge, pBasic, pHRA, pDA, pDeduct)

dictionary = obj.__dict__
print(dictionary)
