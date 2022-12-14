'''
    breakingRecords has the following parameter(s):
        int scores[n]: points scored per game
    Returns int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.
'''

def breaking_records(scores):
    comparison_point_max = scores[0]
    break_most_points_records = 0
    
    comparison_point_min = scores[0]
    break_least_points_records = 0

    for point in scores:
        if point > comparison_point_max:
            comparison_point_max = point
            break_most_points_records += 1
        
        elif point < comparison_point_min:
            comparison_point_min = point
            break_least_points_records += 1
        
    return [break_most_points_records, break_least_points_records]


#example
print(breaking_records([10, 5, 20, 20, 4, 5, 2, 25, 1]))
