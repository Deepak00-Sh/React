<h1>React concepts</h1>

##

<h3> Controlled Elements </h3>
1. Controlled elements are used when working with the forms in react.

2. By default, the input fields maintains their own state inside DOM and this make it hard to read their values.
   
3. In react, we keep the values at one central place and in order to do that we use <strong>controlled elements</strong>

4. With this technique, it is react which controls and owns the state of these elements.

In order to keep the inputs in sync with the application, we do three steps :

<ul>
<li> Create a piece of state </li>
i.e.
const [description, setDescription] = useState("");

<li>Implement the state Value to the form element</li>
i.e.
//input
        type="text"
        placeholder="Item...."
        value={description}
// 

<li> Adding the onChange function on the form element to handle the change event else it will remain the empty as defined in the useState("")</li>
i.e.
// input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      
</ul>
