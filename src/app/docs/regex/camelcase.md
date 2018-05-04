
If you want to convert reverse of camelcase
eg: 

Input = 'FloatingActionButton' 
Output = Floating Action Button

The oneline way
stringValue.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")

For robust solution 
stringValue.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
