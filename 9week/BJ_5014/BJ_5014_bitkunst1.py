# answer = 0

# def findWayUp(_target, _up, _down):
#     global answer
#     if _up == 0: 
#         answer = 'use the stairs'
#         return
#     elif _target % _up == 0: 
#         answer += _target // _up
#         return
#     elif _target % _up != 0:
#         while (True):
#             i = 1
#             if ( (_target - i*_down) < 0): break
#             temp = (_target - i*_down) % _up
#             if (temp == 0):
#                 answer += (_target - i*_down) // _up
#                 answer += i
#                 answer += (i*_down) // _down
#                 break
#             i += 1
#         return
#     else:
#         answer = 'use the stairs'
#         return

# def findWayDown(_target, _up, _down):
#     global answer
#     if _down == 0:
#         answer = 'use the stairs'
#         return
#     elif _target % _down == 0:
#         answer += _target // _down
#         return
#     elif _target % _down != 0:
#         while (True):
#             i = 1
#             if ((_target - i*_up) < 0): break
#             temp = (_target - i*_up) % _down
#             if (temp == 0):
#                 answer += (_target - i*_up) // _down
#                 answer += i
#                 answer += (i*_up) // _up
#                 break
#             i += 1
#         return
#     else:
#         answer = 'use the stairs'
#         return
                
# if current < to:
#     target = to - current
#     findWayUp(target, up, down)
#     print(answer)
# else:
#     target = current - to
#     findWayDown(target, up, down)
#     print(answer)