## Add-Two-Numbers-Explanation

[Back to Explanations](./Explanations.md)

## Solution Explanation
### Initialization:

1. Create a dummyHead for the result linked list to simplify handling the edge case where a new digit is added to the most significant place.
2. Initialize a current pointer to the dummyHead.
3. Initialize a carry variable to handle situations where the sum of two digits results in a value greater than or equal to 10.
Iteration through Linked Lists:

4. Use a while loop to iterate through the linked lists (l1 and l2) or until there is no more carry.
### Inside the loop:
5. Extract the values of the current nodes (val1 and val2) or use 0 if the node is null.
6. Calculate the sum of the current digits and the carry.
7. Update the carry for the next iteration by taking the floor of the sum divided by 10.
8. Create a new node for the result linked list with the remainder of the sum.
8. Move the current pointer to the newly created node.
9. Move to the next nodes in the input linked lists (l1 and l2) if they exist.
10. Return Result:

11. Return the next node after the dummyHead, which is the head of the result linked list.


[Back to top ⬆️⬆️](#)

[Back to Explanations](./Explanations.md)