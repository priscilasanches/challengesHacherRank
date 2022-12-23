def designer_pdf_viewer(h, word):

    letters_height = [h[ord(letter)-97] for letter in word] #ascII -> a=97 / h -> a=0
    
    letters_height.sort(reverse=True)

    highest_letter = letters_height[0]

    return len(word)*highest_letter

#example
print(designer_pdf_viewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'hoje'))

'''
The function is expected to return an INTEGER.- word area
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h - height of each letter (a id = 0 [....] z id = 25)
 *  2. STRING word - width of each letter is 1mm
'''