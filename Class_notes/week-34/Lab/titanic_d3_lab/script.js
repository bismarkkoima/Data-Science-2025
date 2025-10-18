// Enhanced script.js with error handling
console.log("Loading Titanic visualization...");

d3.csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv")
    .then(function(data) {
        console.log("Data loaded successfully:", data.length, "records");
        
        // Clean data - remove rows with missing Age or Fare
        const cleanData = data.filter(d => d.Age && d.Fare && !isNaN(d.Age) && !isNaN(d.Fare));
        console.log("After cleaning:", cleanData.length, "records");
        
        if (cleanData.length === 0) {
            throw new Error("No valid data after cleaning");
        }
        
        createVisualization(cleanData);
    })
    .catch(function(error) {
        console.error("Error loading data:", error);
        d3.select("#chart")
            .append("div")
            .style("color", "red")
            .style("font-size", "18px")
            .text("Error loading data: " + error.message);
    });

function createVisualization(data) {
    const width = 800, height = 500;
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    // Create scales with padding
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.Age)])
        .range([margin.left, width - margin.right])
        .nice();
        
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.Fare)])
        .range([height - margin.bottom, margin.top])
        .nice();
    
    // Create tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background", "white")
        .style("padding", "8px")
        .style("border", "1px solid #ccc")
        .style("border-radius", "4px")
        .style("font-size", "12px");
    
    // Add circles with hover effects
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "circle")
        .attr("cx", d => xScale(+d.Age))
        .attr("cy", d => yScale(+d.Fare))
        .attr("r", 5)
        .attr("fill", d => d.Survived === "1" ? "blue" : "red")
        .on("mouseover", function(event, d) {
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip.html(`
                <strong>Passenger Info</strong><br>
                Age: ${d.Age}<br>
                Fare: $${d.Fare}<br>
                Class: ${d.Pclass}<br>
                Sex: ${d.Sex}<br>
                Survived: ${d.Survived === "1" ? "Yes" : "No"}
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
            
            // Highlight the circle
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", 8)
                .attr("stroke", "black")
                .attr("stroke-width", 2);
        })
        .on("mouseout", function(d) {
            tooltip.transition().duration(500).style("opacity", 0);
            
            // Reset circle
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", 5)
                .attr("stroke", null);
        });
    
    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(xAxis);
        
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis);
    
    // Add axis labels
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .text("Age (Years)");
        
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .text("Fare (USD)");
        
    // Add title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text("Titanic: Age vs Fare by Survival Status");
        
    // Add legend
    const legend = svg.append("g")
        .attr("transform", `translate(${width - 120}, ${margin.top})`);
        
    // Survived
    legend.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 6)
        .attr("fill", "blue");
        
    legend.append("text")
        .attr("x", 15)
        .attr("y", 4)
        .text("Survived")
        .style("font-size", "12px");
        
    // Died
    legend.append("circle")
        .attr("cx", 0)
        .attr("cy", 20)
        .attr("r", 6)
        .attr("fill", "red");
        
    legend.append("text")
        .attr("x", 15)
        .attr("y", 24)
        .text("Died")
        .style("font-size", "12px");
        
    console.log("Visualization created successfully!");
}