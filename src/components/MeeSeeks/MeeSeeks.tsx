import { useState } from 'react'
import './MeeSeeks.styles.scss'

const MeeSeeks = ({ classOverrides }: { classOverrides?: string }) => {
  const [meeSeeksJobDone, setMeeSeeksJobDone] = useState(false)

  if (meeSeeksJobDone) {
    return <div className={`bg-transparent h-32`}></div>
  }

  return (
    <div
      onClick={() => setMeeSeeksJobDone(true)}
      className={`bg-transparent h-32 w-32 ${classOverrides}`}
    >
      <svg
        className="meeseeks"
        viewBox="200 0 1000 1000"
        preserveAspectRatio="xMidYMid none"
        height="1000"
        width="1000"
      >
        <path
          className="meeseeks__arm meeseeks__arm--left meeseeks__arm--stroke"
          d="M600,293 c0,0 -100,80 -240,100
      l20,48
      c0,0 200,-60 240,-150"
        />
        <path
          className="meeseeks__arm meeseeks__arm--left meeseeks__arm--fill"
          d="M600,290 c0,0 -100,80 -240,102
      l20,50
      c0,0 200,-60 240,-140"
        />

        <path
          className="meeseeks__hand meeseeks__hand--left meeseeks__hand--stroke"
          d="M410,390 c0,0 -20,-50 -50,-60
      s-40,80 3,118
      c0,0 0,10 47,-3
      c0,0 20,-10 50,-50
      c0,0 10,-20 -20,-5"
        />
        <path
          className="meeseeks__hand meeseeks__hand--left meeseeks__hand--fill"
          d="M413,390 c0,0 -20,-50 -53,-60
      s-40,80 0,120
      c0,0 0,10 50,-5
      c0,0 20,-10 50,-50
      c0,0 10,-20 -20,-10"
        />

        <g className="meeseeks__body">
          <path
            className="meeseeks__torso meeseeks__torso--stroke"
            d="M593,275
        c0,0 -20,100 -21,250
        c0,0 0,100 60,100
        c0,0 100,20 120,-60
        s-40,-100 -70,-290
        l-90,0"
          />
          <path
            className="meeseeks__torso meeseeks__torso--fill"
            d="M592,275
        c0,0 -20,100 -20,250
        c0,0 0,100 60,100
        c0,0 100,20 119,-60
        s-40,-100 -67,-290
        l-90,0"
          />
        </g>

        <path
          className="meeseeks__leg meeseeks__leg--left meeseeks__leg--stroke"
          d="M610,620 c0,0 -40,45 -80,150
      c0,0 -10,0 0,150
      c0,0 -20,20 -80,40
      c0,0 -10,0 -10,10
      c0,0 0,0 160,0
      c0,0 5,-40 -10,-200
      c0,0 5,-40 60,-141"
        />
        <path
          className="meeseeks__leg meeseeks__leg--left meeseeks__leg--fill"
          d="M608,620 c0,0 -40,45 -78,150
      c0,0 -10,0 0,150
      c0,0 -20,20 -80,40
      c0,0 -10,0 -10,10
      c0,0 0,10 163,0
      c0,0 5,40 -12,-200
      c0,0 5,-40 60,-139
      l-10,0
      l-30,-20"
        />

        <path
          className="meeseeks__leg meeseeks__leg--right meeseeks__leg--stroke"
          d="M680,627 c0,0 20,45 30,138
      c0,0 0,20 -17,160
      c0,0 -20,20 -23,30
      s0,20 40,30
      c0,0 30,10 80,-15
      c0,0 20,-20 -23,-55
      c0,0 -5,-10 3,-150
      c0,0 0,-30 -60,-145"
        />
        <path
          className="meeseeks__leg meeseeks__leg--right meeseeks__leg--fill"
          d="M677,630 c0,0 20,45 33,135
      c0,0 0,20 -20,160
      c0,0 -20,20 -20,30
      s0,20 40,30
      c0,0 30,10 80,-15
      c0,0 20,-20 -20,-55
      c0,0 -5,-10 00,-150
      c0,0 0,-30 -60,-150
      c0,0 -5,15 -25,15"
        />

        <g className="meeseeks__skull">
          <path
            className="meeseeks__skull__stroke"
            d="M670,40 c0,0 -140,-20 -120,100
        c0,0 20,80 40,140
        l40,0
        c0,0 120,0 140,-100
        c0,0 30,-130 -100,-140"
          />
          <path
            className="meeseeks__skull__fill"
            d="M670,40 c0,0 -140,-20 -120,100
        c0,0 16,80 40,147
        l40,0
        c0,0 115,-5 138,-100
        c0,0 35,-140 -98,-147"
          />
        </g>

        <g className="meeseeks__eyes">
          <path
            className="meeseeks__eye meeseeks__eye--left"
            d="M620,123 c0,0 -12,0 -12,12
         c0,0 0,12 12,12
         c0,0 12,0 12,-12
         c0,0 0,-12 -12,-12"
          />
          <path
            className="meeseeks__eye-glint meeseeks__eye-glint--left"
            d="M622,128 c0,0 -5,0 -5,5
         c0,0 0,5 5,5
         c0,0 5,0 5,-5
         c0,0 0,-5 -5,-5"
          />
          <path
            className="meeseeks__eye-brow meeseeks__eye-brow--left"
            d="M608,105 c0,0 3,-10 18,-12"
          />
          <path
            className="meeseeks__eye meeseeks__eye--right"
            d="M650,120 c0,0 -12,0 -12,12
         c0,0 0,12 12,12
         c0,0 12,0 12,-12
         c0,0 0,-12 -12,-12"
          />
          <path
            className="meeseeks__eye-glint meeseeks__eye-glint--right"
            d="M651,125 c0,0 -5,0 -5,5
         c0,0 0,5 5,5
         c0,0 5,0 5,-5
         c0,0 0,-5 -5,-5"
          />
          <path className="meeseeks__eye-brow meeseeks__eye-brow--right" d="M640,96 s8,-3 20,9" />
        </g>

        <g className="meeseeks__oral-cavity">
          <path
            className="meeseeks__mouth-bg"
            d="M620,190 c0,0 -15,0 -30,-10
        s-20,-20 -40,-25
        c0,0 -20,0 -20,35
        c0,0 0,60 110,60
        c0,0 90,0 100,-55
        c0,0 5,-45 -30,-45
        s-45,40 -90,40"
          />

          <path
            className="meeseeks__tongue"
            d="M722,230 c0,0 0,-30 -40,-30
        c0,0 -20,0 -20,15
        c0,0 0,5 5,5
        c0,0 20,0 30,23
        l26,-13"
          />

          <path
            className="meeseeks__tooth meeseeks__tooth--top-1"
            d="M575,166 c0,0 0,10 -10,10
        c0,0 -10,0 -5,-20
        l16,10"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--top-2"
            d="M595,181 c0,0 0,15 -12,10
        c0,0 -8,0 -5,-23
        l18,14"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--top-3"
            d="M622,190 c0,0 0,20 -15,15
        c0,0 -10,0 -9,-22
        l25,5"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--top-4"
            d="M650,182 c0,0 0,30 -15,25
        c0,0 -10,0 -9,-18
        l24,-8"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--top-5"
            d="M678,161 c0,0 0,30 -15,32
        c0,0 -10,0 -9,-15
        l24,-18"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--top-5"
            d="M700,149 c0,0 0,25 -10,25
        c0,0 -10,0 -9,-16
        l19,-10"
          />

          <path
            className="meeseeks__tooth meeseeks__tooth--bottom-1"
            d="M575,242 c0,0 0,-15 -10,-15
        c0,0 -10,0 -5,8
        l16,8"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--bottom-2"
            d="M595,247 c0,0 0,-12 -10,-12
        c0,0 -10,0 -5,9
        l16,4"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--bottom-3"
            d="M615,251 c0,0 0,-12 -10,-12
        c0,0 -10,0 -7,9
        l18,3"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--bottom-4"
            d="M638,253 c0,0 0,-12 -12,-20
        c0,0 -7,0 -7,18
        l18,1"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--bottom-5"
            d="M660,251 c0,0 0,-12 -10,-12
        c0,0 -10,0 -7,12
        l17,0"
          />
          <path
            className="meeseeks__tooth meeseeks__tooth--bottom-6"
            d="M682,247 c0,0 0,-10 -10,-10
        c0,0 -10,0 -7,13
        l17,-3"
          />

          <path
            className="meeseeks__lips meeseeks__lips--stroke"
            d="M620,185 c0,0 -15,0 -40,-25
        s-20,-15 -35,-20
        c0,0 -25,0 -25,50
        c0,0 0,75 120,70
        c0,0 115,5 115,-70
        c0,0 5,-55 -35,-55
        s-40,30 -95,50"
          />

          <path
            className="meeseeks__lips meeseeks__lips--fill"
            fill-rule="evenodd"
            d="M620,175 c0,0 -15,0 -35,-15
        s-20,-20 -40,-20
        c0,0 -25,0 -25,50
        c0,0 0,75 120,75
        c0,0 110,0 115,-70
        c0,0 5,-55 -40,-60
        s-60,40 -95,40
      M620,190 c0,0 -15,0 -30,-10
        s-20,-20 -40,-25
        c0,0 -20,0 -20,35
        c0,0 0,60 110,60
        c0,0 90,0 100,-55
        c0,0 5,-45 -30,-45
        s-45,40 -90,40"
          />
        </g>

        <path
          className="meeseeks__arm meeseeks__arm--right meeseeks__arm--stroke"
          d="M660,285 c0,0 20,-20 50,0
      c0,0 5,5 140,-30
      c0,0 10,0 140,80
      l-40,40
      l-120,-85
      c0,0 -10,-5 -160,30"
        />
        <path
          className="meeseeks__arm meeseeks__arm--right meeseeks__arm--fill"
          d="M656,283 c0,0 20,-20 56,2
      c0,0 5,5 138,-32
      c0,0 10,0 140,82
      l-40,43
      l-120,-88
      c0,0 -15,-5 -162,36"
        />

        <path
          className="meeseeks__hand meeseeks__hand--right meeseeks__hand--stroke"
          d="M950,330 c0,0 10,-20 30,-30
      s20,0 20,10
      s0,0 40,30
      c0,0 5,10 -10,40
      s0,0 -85,10
      c0,0 -30,-10 -10,-35"
        />
        <path
          className="meeseeks__hand meeseeks__hand--right meeseeks__hand--fill"
          d="M947,330 c0,0 10,-20 33,-30
      s20,0 20,10
      s0,0 40,27
      c0,0 5,10 -10,43
      s0,0 -85,10
      c0,0 -30,-10 -13,-35"
        />
      </svg>
    </div>
  )
}

export default MeeSeeks
