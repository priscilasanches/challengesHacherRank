'''catAndMouse has the following parameter(s):
    int x: Cat A's position
    int y: Cat B's position
    int z: Mouse C's position
    Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight
Returns string: Either 'Cat A', 'Cat B', or 'Mouse C'''

def cat_and_mouse(x, y, z):
    dist_cat_a_mouse = abs(x-z)
    dist_car_b_mouse = abs(y-z)

    return 'Cat A' if dist_cat_a_mouse < dist_car_b_mouse else 'Cat B' if dist_car_b_mouse < dist_cat_a_mouse else 'Mouse C'

#example
print(cat_and_mouse(3,0,2))